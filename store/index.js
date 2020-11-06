export const state = () => ({
	isEnoughStars: false,
})

export const mutations = {
	enoughStars(state) {
		state.isEnoughStars = true
	},
}
