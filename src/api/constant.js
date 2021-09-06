export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://partner.telkom.co.id/api/v1/' : 'https://tpn-dev.digipart.id/api/v1';

export const loginUrl = `${baseUrl}/auth/login`;
export const partnershipsUrl = `${baseUrl}/partnerships`;
export const organizationsUrl = `${baseUrl}/organizations`;
export const companiesUrl = `${baseUrl}/companies`;
export const approvalsUrl = `${baseUrl}/approvals`;
