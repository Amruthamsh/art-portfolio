/**
 * Feature flags for temporarily enabling/disabling parts of the site.
 *
 * To re-enable buying paintings and enrolling in classes, set
 * `enableCommerce` to `true` (or set the `VITE_ENABLE_COMMERCE=true`
 * environment variable).
 */
export const FEATURES = {
  enableCommerce:
    import.meta.env.VITE_ENABLE_COMMERCE === "true" ? true : false,
} as const;
