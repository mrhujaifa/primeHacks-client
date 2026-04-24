
"use client";

import { getAllUserClientQueryFn } from "@/hooks/hackathon/hackathon.queries.client";
import { AdminServices } from "@/services/admin.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Crown, Mail, UserCircle2 } from "lucide-react";
import { UserInformation } from "@/types/user.types";
import toast from "react-hot-toast";

type UserRole = "USER" | "ORGANIZER" | "ADMIN";
type UserStatus = "ACTIVE" | "SUSPENDED" | "BLOCK";

const Allusers = () => {
  const queryClient = useQueryClient();

  const { data, isError, isPending } = useQuery({
    queryKey: ["get-all-users"],
    queryFn: async () => {
      return await getAllUserClientQueryFn();
    },
  });

  const roleMutation = useMutation({
    mutationFn: async ({
      userId,
      role,
    }: {
      userId: string;
      role: UserRole;
    }) => {
      return await AdminServices.updateUserRole(userId, { role });
    },
    onSuccess: () => {
      toast.success("User role updated successfully");
      queryClient.invalidateQueries({ queryKey: ["get-all-users"] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update user role",
      );
    },
  });

  const statusMutation = useMutation({
    mutationFn: async ({
      userId,
      status,
    }: {
      userId: string;
      status: UserStatus;
    }) => {
      return await AdminServices.updateUserStatus(userId, { status });
    },
    onSuccess: () => {
      toast.success("User status updated successfully");
      queryClient.invalidateQueries({ queryKey: ["get-all-users"] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update user status",
      );
    },
  });

  const handleRoleChange = (userId: string, role: string) => {
    roleMutation.mutate({
      userId,
      role: role as UserRole,
    });
  };

  const handleStatusChange = (userId: string, status: string) => {
    statusMutation.mutate({
      userId,
      status: status as UserStatus,
    });
  };

  const users = data || [];

  if (isPending) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="space-y-4">
          <div className="h-8 w-52 animate-pulse rounded-lg bg-white/10" />
          <div className="h-20 animate-pulse rounded-2xl bg-white/10" />
          <div className="h-20 animate-pulse rounded-2xl bg-white/10" />
          <div className="h-20 animate-pulse rounded-2xl bg-white/10" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-red-300 backdrop-blur-xl">
        <h2 className="text-lg font-semibold">Failed to load users</h2>
        <p className="mt-2 text-sm text-red-200/80">
          Something went wrong while fetching all users.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120]/90 p-6 shadow-2xl backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_25%)]" />

      <div className="relative z-10 mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">All Users</h1>
          <p className="mt-1 text-sm text-slate-400">
            Manage all registered users from your admin dashboard
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Total Users: {users.length}
        </div>
      </div>

      <div className="relative z-10 overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-left">
          <thead className="bg-white/5">
            <tr className="border-b border-white/10 text-sm text-slate-300">
              <th className="px-5 py-4 font-semibold">User</th>
              <th className="px-5 py-4 font-semibold">Email</th>
              <th className="px-5 py-4 font-semibold">Role</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Premium</th>
              <th className="px-5 py-4 font-semibold">Created At</th>
            </tr>
          </thead>

          <tbody>
            {users?.length > 0 ? (
              users.map((user: UserInformation) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 transition duration-200 hover:bg-white/5"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {user.image ? (
                        <img
                          src={user.image}
                          alt={user.name}
                          className="h-11 w-11 rounded-full border border-white/10 object-cover"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-300">
                          <UserCircle2 size={24} />
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold text-white">
                          {user.name || "Unknown User"}
                        </h3>
                        <p className="text-xs text-slate-400">
                          ID: {user.id?.slice(0, 10)}...
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <Mail size={16} className="text-cyan-400" />
                      <span>{user.email}</span>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <select
                      defaultValue={user.role}
                      disabled={roleMutation.isPending}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="w-[150px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="USER" className="bg-slate-900 text-white">
                        USER
                      </option>
                      <option
                        value="ORGANIZER"
                        className="bg-slate-900 text-white"
                      >
                        ORGANIZER
                      </option>
                      <option value="ADMIN" className="bg-slate-900 text-white">
                        ADMIN
                      </option>
                    </select>
                  </td>

                  <td className="px-5 py-4">
                    <select
                      defaultValue={user.status}
                      disabled={statusMutation.isPending}
                      onChange={(e) =>
                        handleStatusChange(user.id, e.target.value)
                      }
                      className="w-[150px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option
                        value="ACTIVE"
                        className="bg-slate-900 text-emerald-300"
                      >
                        ACTIVE
                      </option>
                      <option
                        value="SUSPENDED"
                        className="bg-slate-900 text-yellow-300"
                      >
                        SUSPENDED
                      </option>
                      <option
                        value="BLOCK"
                        className="bg-slate-900 text-red-300"
                      >
                        BLOCK
                      </option>
                    </select>
                  </td>

                  <td className="px-5 py-4">
                    {user.isPremium ? (
                      <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-300">
                        <Crown size={14} />
                        {user.premiumPlan || "Premium"}
                      </div>
                    ) : (
                      <span className="rounded-full bg-slate-500/15 px-3 py-1 text-xs font-semibold text-slate-300">
                        Free
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-10 text-center text-sm text-slate-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
