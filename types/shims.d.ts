declare module '@vercel/analytics/react' {
  import * as React from 'react'
  export const Analytics: React.ComponentType<{}>
  export default Analytics
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}
