export const state = () => ({
	isEnoughStars: false,
	magicStars: false,
	moveStars: false,
	elTop: null,
	elLeft: null,
})

export const mutations = {
	enoughStars(state) {
		state.isEnoughStars = true
	},
	getElTop(state, top) {
		state.elTop = top
	},
	getElLeft(state, left) {
		state.elLeft = left
	},
	runMagicStars(state) {
		state.magicStars = !state.magicStars
	},
	movingStars(state, bool) {
		state.moveStars = bool
	},
}
