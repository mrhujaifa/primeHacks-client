src/
app/
(auth)/
login/
page.tsx
register/
page.tsx
forgot-password/
page.tsx
reset-password/
page.tsx

    (public)/
      page.tsx
      hackathons/
        page.tsx
        details/
          [id]/
            page.tsx

    dashboard/
      layout.tsx
      page.tsx

      hackathons/
        page.tsx
        create/
          page.tsx
        [id]/
          edit/
            page.tsx

      organizer-application/
        page.tsx

      submissions/
        page.tsx
        my-submissions/
          page.tsx

      payments/
        page.tsx

      users/
        page.tsx

      profile/
        page.tsx

    premium/
      page.tsx

    payment/
      success/
        page.tsx
      cancel/
        page.tsx

    layout.tsx
    loading.tsx
    error.tsx
    not-found.tsx

modules/
auth/
api/
auth.api.ts
components/
LoginForm.tsx
RegisterForm.tsx
SocialLogins.tsx
ForgotPasswordForm.tsx
schemas/
auth.schema.ts
types/
auth.types.ts

    hackathon/
      api/
        hackathon.api.ts
      queries/
        hackathon.keys.ts
        hackathon.queries.ts
        hackathon.mutations.ts
      components/
        HackathonCard.tsx
        HackathonDetails.tsx
        HackathonForm.tsx
        HackathonToolbar.tsx
        HackathonFilters.tsx
        MyHackathonTable.tsx
      schemas/
        hackathon.schema.ts
      types/
        hackathon.types.ts

    organizer-application/
      api/
        organizer-application.api.ts
      queries/
        organizer-application.keys.ts
        organizer-application.queries.ts
        organizer-application.mutations.ts
      components/
        OrganizerApplicationDetails.tsx
        OrganizerApplicationForm.tsx
        OrganizerApplicationHeader.tsx
        OrganizerApplicationStatusCard.tsx
      schemas/
        organizer-application.schema.ts
      types/
        organizer-application.types.ts

    submission/
      api/
        submission.api.ts
      queries/
        submission.keys.ts
        submission.queries.ts
        submission.mutations.ts
      components/
        SubmissionForm.tsx
        SubmissionCard.tsx
        MySubmissionTable.tsx
        SubmissionDetails.tsx
      schemas/
        submission.schema.ts
      types/
        submission.types.ts

    payment/
      api/
        payment.api.ts
      queries/
        payment.keys.ts
        payment.queries.ts
        payment.mutations.ts
      components/
        PricingCard.tsx
        PremiumPlanCard.tsx
        PaymentSuccess.tsx
      types/
        payment.types.ts

    user/
      api/
        user.api.ts
      queries/
        user.keys.ts
        user.queries.ts
        user.mutations.ts
      components/
        UserTable.tsx
        UserStatusDropdown.tsx
        ProfileCard.tsx
      types/
        user.types.ts

    admin/
      api/
        admin.api.ts
      queries/
        admin.keys.ts
        admin.queries.ts
      components/
        AdminStatsCards.tsx
        AdminDashboardOverview.tsx
      types/
        admin.types.ts

shared/
components/
ui/
Button.tsx
Input.tsx
Modal.tsx
Badge.tsx
Card.tsx
EmptyState.tsx
LoadingState.tsx
ErrorState.tsx
ConfirmDialog.tsx

      layout/
        Navbar.tsx
        Footer.tsx
        Sidebar.tsx
        DashboardHeader.tsx
        MobileSidebar.tsx

    hooks/
      useDebounce.ts
      useClickOutside.ts
      useMediaQuery.ts

    constants/
      routes.ts
      roles.ts
      query-keys.ts
      nav-items.ts

    types/
      api.types.ts
      common.types.ts

    utils/
      cn.ts
      format-date.ts
      format-currency.ts
      get-error-message.ts

lib/
axios/
axios.ts

    tanstack-query/
      query-client.ts
      query-provider.tsx

    auth/
      auth-client.ts
      auth-server.ts

    validators/
      zod-error.ts

providers/
AppProvider.tsx
ThemeProvider.tsx

middleware.ts
