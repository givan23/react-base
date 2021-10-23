export const switchEnvVariables = () => {
    return (process.env.NODE_ENV === "development") ? {
        DOMAIN: process.env.DOMAIN
    } : {
        DOMAIN: process.env.DOMAIN_PROD
    }
}