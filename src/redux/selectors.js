export const selectContacts = state => state.contact;
export const selectFilterValue = state => state.filter;
export const selectIsLoading = state => state.contact.isLoading;

export const selectisLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;
