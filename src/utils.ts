export const memorizeBaseUrl = (baseUrl: string) => (
  (relativePath: string) => {
    const fullPath = `${baseUrl}/${relativePath}`
    return fullPath.replace(/\/{2,}/g, '/')
  }
)
