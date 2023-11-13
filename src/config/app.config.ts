interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Digital Marketing Manager'],
  customerRoles: ['Individual User'],
  tenantRoles: ['Content Creator', 'Social Media Marketer', 'Digital Marketing Manager'],
  tenantName: 'Startup',
  applicationName: 'TikTrender',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Create and manage own videos',
    'View startup information',
    'View trends and associated videos',
  ],
  ownerAbilities: [
    'Manage startup information',
    'Manage user profiles',
    'Manage video content',
    'Monitor trends and hashtags',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/46c391a9-5693-4c3f-a625-4ee82edb7c30',
};
