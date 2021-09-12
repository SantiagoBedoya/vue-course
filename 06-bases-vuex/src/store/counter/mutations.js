export const increment = (state) => {
    state.count++;
}
export const incrementBy = (state, val) => {
    state.count += val;
}
export const setLoading = (state, isLoading) => {
    state.isLoading = isLoading
}