export const organizerApplicationKeys = {
  all: ["organizer-application"] as const,

  myApplication: () =>
    [...organizerApplicationKeys.all, "my-application"] as const,
};
