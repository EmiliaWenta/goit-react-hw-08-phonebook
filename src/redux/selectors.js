export const selectContacts = state => state.contact;
export const selectLoaderContacts = state => state.contact.isLoading;

export const selectAuth = state => state.auth;
export const selectUser = state => state.auth.user;
export const selectLoaderAuth = state => state.auth.isLoading;
export const selectisLoggedIn = state => state.auth.isLoggedIn;

export const selectFilterValue = state => state.filter;
