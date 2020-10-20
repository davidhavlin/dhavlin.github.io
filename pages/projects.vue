<template>
	<div class="project-page" :class="{ projectShowcase: showCase }">
		<h1 ref="pageTitle" class="project-page-title">
			My Projects ({{ index }}/{{ myProjects.length }})
		</h1>
		<div class="under-projects">
			<!-- ------------------- ARROWS A FRAME ---------- -->
			<div v-if="!showCase" class="arrows">
				<div ref="leftArrow" class="left-arrow" @click="prevProject()">
					<svg
						width="70"
						height="94"
						viewBox="0 0 70 94"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M67.5 5V2.5H65H41H38.5V5V14.5H29H26.5V17V26.5H17H14.5V29V38.5H5H2.5V41V53V55.5H5H14.5V65V67.5H17H26.5V77V79.5H29H38.5V89V91.5H41H65H67.5V89V77V74.5H65H55.5V65V62.5H53H43.5V53V50.5H41H31.5V43.5H41H43.5V41V31.5H53H55.5V29V19.5H65H67.5V17V5Z"
							fill="white"
							stroke="black"
							stroke-width="5"
						/>
					</svg>
				</div>
				<div
					ref="rightArrow"
					class="right-arrow"
					@click="nextProject()"
				>
					<svg
						width="70"
						height="94"
						viewBox="0 0 70 94"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.5 89L2.5 91.5L5 91.5L29 91.5L31.5 91.5L31.5 89L31.5 79.5L41 79.5L43.5 79.5L43.5 77L43.5 67.5L53 67.5L55.5 67.5L55.5 65L55.5 55.5L65 55.5L67.5 55.5L67.5 53L67.5 41L67.5 38.5L65 38.5L55.5 38.5L55.5 29L55.5 26.5L53 26.5L43.5 26.5L43.5 17L43.5 14.5L41 14.5L31.5 14.5L31.5 5L31.5 2.5L29 2.5L4.99999 2.50001L2.49999 2.50001L2.49999 5.00001L2.49999 17L2.49999 19.5L4.99999 19.5L14.5 19.5L14.5 29L14.5 31.5L17 31.5L26.5 31.5L26.5 41L26.5 43.5L29 43.5L38.5 43.5L38.5 50.5L29 50.5L26.5 50.5L26.5 53L26.5 62.5L17 62.5L14.5 62.5L14.5 65L14.5 74.5L5 74.5L2.5 74.5L2.5 77L2.5 89Z"
							fill="white"
							stroke="black"
							stroke-width="5"
						/>
					</svg>
				</div>
			</div>
			<ProjectFrame />
			<!-- **************************** -->
			<div class="projects">
				<div
					class="project-boxes"
					@click="whichHalf"
					@transitionend="afterCarouselMove"
				>
					<ProjectBox
						v-for="project in myProjects"
						:id="'box-' + project.id"
						:key="project.id"
						:showtime="showCase"
						:project="project"
						class="ProjectBox"
					/>
				</div>
			</div>
		</div>
		<!-- ------------- BUTTONY ------------- -->
		<MyButton
			v-if="!showCase"
			ref="showBtn"
			class="show-btn"
			main-color="#100317"
			second-color="#0b0010"
			border-color="#0b0010"
			text-color="#00f3ff"
			@click.native="showProject()"
			>Show me</MyButton
		>
		<MyButton
			v-if="showCase"
			class="close-btn showMeButton"
			main-color="#100317"
			second-color="#0b000f"
			border-color="#0b000f"
			text-color="#fff"
			@click.native="closeProject()"
			>Close me</MyButton
		>
	</div>
</template>

<script>
import myProjects from '~/components/projects/Projects'

export default {
	data() {
		return {
			index: 1,
			realIndex: 1,
			counter: 2,
			active: false,
			size: 210,
			showCase: false,
			myProjects,
			initialX: null,
			initialY: null,
		}
	},
	computed: {
		container() {
			return document.querySelector('.project-boxes')
		},
		projects() {
			return Array.from(document.querySelectorAll('.ProjectBox'))
		},
	},
	created() {
		// console.log('created: ', this.container)
	},
	destroyed() {
		console.log('nieco')
	},
	mounted() {
		this.cloneElements()
		this.onMountedStyles()
		this.handleHover()

		this.animationOnRender()
		this.handleSwipe()

		window.addEventListener('resize', (e) => {
			if (e.target.innerWidth < 931) {
				this.size = 180
				this.containerTransform()
			} else if (e.target.innerWidth > 931) {
				this.size = 210
				this.containerTransform()
			}
		})
	},
	methods: {
		afterCarouselMove() {
			if (!event.target.classList.contains('project-boxes')) return
			this.carouselMagic()
		},
		// HOVER LISTENERS
		// kazdemu projektu dam event listener, aj kopiam
		handleHover() {
			this.projects.map((project) => {
				project.addEventListener('mouseenter', this.hoverInHandler)
				project.addEventListener('mouseleave', this.removeHovered)
			})
		},
		// podla id dam classu originalu a jeho kopii, aby transitiony boli plynule pri preskakovani
		// z kopie na original, musim to riesit takto a nie cez css hover
		hoverInHandler(e) {
			if (this.showCase) return
			const projectID = e.target.id
			const hoveredProjects = Array.from(
				this.container.querySelectorAll(`#${projectID}`)
			)
			hoveredProjects.map((project) => project.classList.add('hovered'))
		},
		// odstranim hovered classu zo vsetkych projektov
		removeHovered() {
			if (this.showCase) return
			this.projects.map((project) => project.classList.remove('hovered'))
		},

		handleSwipe() {
			this.container.addEventListener(
				'touchstart',
				this.handleTouchStart,
				false
			)
			this.container.addEventListener(
				'touchmove',
				this.handleTouchMove,
				false
			)
		},
		handleTouchStart(e) {
			this.initialX = e.touches[0].clientX
			this.initialY = e.touches[0].clientY
		},
		handleTouchMove(e) {
			if (
				this.initialX === null ||
				this.initialY === null ||
				this.showCase
			)
				return
			const currentX = e.touches[0].clientX
			const currentY = e.touches[0].clientY
			let diffX = this.initialX - currentX
			let diffY = this.initialY - currentY
			if (Math.abs(diffX) + Math.abs(diffY) > 100) {
				if (Math.abs(diffX) > Math.abs(diffY)) {
					// horizontalne slidovanie.. right / left
					diffX > 0 ? this.nextProject() : this.prevProject()
				}
				diffX = null
				diffY = null
			}
		},

		whichHalf(e) {
			const selected = this.container.querySelector('.selected')
			if (e.composedPath()[2] === selected.previousSibling) {
				this.prevProject()
			} else if (e.composedPath()[2] === selected.nextSibling) {
				this.nextProject()
			} else if (e.composedPath()[2] === selected) {
				this.showProject()
			}
		},

		showProject() {
			const selected = this.container.querySelector('.selected')
			/* pokial nemaju classu selected tak dostanu classu ktora ich schova */
			this.projects.map((project) => {
				if (!project.classList.contains('selected'))
					project.classList.add('hideBox')
			})
			this.removeHovered()
			this.showCase = true
			selected.classList.add('show')
			// zafarbim page title podla vybraneho projektu, nech ladia farby
			// prettier-ignore
			this.$refs.pageTitle.style.color = this.myProjects[this.realIndex].color.main
		},
		closeProject() {
			this.projects.map((project) =>
				project.classList.remove('hideBox', 'show')
			)
			this.showCase = false

			this.$refs.pageTitle.style.color = '#34b1f8'
			// aby po kliknuti na closebtn sa z animovali rychlejsie, inak by to trvalo ako pri renderi
			this.projects.map(
				(project) => (project.style.animationDelay = '50ms')
			)
		},
		nextProject() {
			// nechcem aby sa dalo klikat na dalsi projekt kym je animacia active
			if (this.active) return
			this.active = true
			// pridava classu selected strednemu projektu
			this.selectMidleBox(true)
			this.counter++
			this.containerTransform()
			// prettier-ignore
			this.realIndex === this.myProjects.length - 1	? (this.realIndex = 0) : this.realIndex++
			// prettier-ignore
			this.index === this.myProjects.length	? (this.index = 1) : this.index++
		},
		prevProject() {
			if (this.active) return
			this.active = true
			this.selectMidleBox(false)
			this.counter--
			this.containerTransform()

			// prettier-ignore
			this.realIndex === 0 ? (this.realIndex = this.myProjects.length - 1) : this.realIndex--
			// prettier-ignore
			this.index === 1 ? (this.index = this.myProjects.length) : this.index--
		},

		containerTransform(transition = true) {
			transition
				? (this.container.style.transition = 'transform 0.2s ease')
				: (this.container.style.transition = 'none')

			this.container.style.transform = `translateX(${
				-this.size * this.counter
			}px)`
		},

		onMountedStyles() {
			// nastavim spravny transform a selected po nacitani stranky
			if (window.innerWidth < 931) {
				this.size = 180
				this.containerTransform()
			} else if (window.innerWidth > 931) {
				this.size = 210
				this.containerTransform()
			}
			this.projects[this.counter + 1].classList.add('selected')
		},
		// spusti sa len ked dojdem na klona ktory ma nas portnut na original, vypne transition aby nebol vidiet skok
		carouselMagic() {
			if (this.projects[this.counter].classList.contains('clone-prev')) {
				this.counter = this.projects.length - 4
				this.containerTransform(false)

				this.projects.map((proj) => proj.classList.remove('selected'))
				// oznaci original selected
				this.projects[this.counter + 1].classList.add('selected')
			}

			if (this.counter === this.projects.length - 3) {
				this.counter = 1
				this.containerTransform(false)

				this.projects.map((proj) => proj.classList.remove('selected'))
				this.projects[this.counter + 1].classList.add('selected')
			}
			this.active = false
		},

		cloneElements() {
			// klonujem projekty aby carousel fungoval donekonecna, ked bude viac projektov toto nebude treba
			const lastchild = this.container.lastChild
			const firstchild = this.container.firstChild
			const clonedLastBox = lastchild.cloneNode(true)
			const clonedLastPrevBox = lastchild.previousSibling.cloneNode(true)
			clonedLastPrevBox.classList.add('clone-prev')
			const clonedFirstBox = firstchild.cloneNode(true)
			const clonedFirstNextBox = firstchild.nextSibling.cloneNode(true)

			this.container.prepend(clonedLastBox)
			this.container.prepend(clonedLastPrevBox)
			this.container.appendChild(clonedFirstBox)
			this.container.appendChild(clonedFirstNextBox)
		},

		selectMidleBox(direction) {
			// prve odstranim vsetkym classu a potom pridam na zaklade smeru kam carousel ide
			this.projects.map((proj) => proj.classList.remove('selected'))
			direction
				? this.projects[this.counter + 2].classList.add('selected')
				: this.projects[this.counter].classList.add('selected')
		},
		animationOnRender() {
			document
				.getElementById('box-2')
				.addEventListener('animationend', () => {
					this.$refs.showBtn.$el.classList.add('showMeButton')
					this.$refs.leftArrow.classList.add('showLeftArrow')
					this.$refs.rightArrow.classList.add('showRightArrow')
				})
		},
	},
}
</script>

<style lang="scss" scoped>
.project-page {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #100317;
	z-index: 10;
}

.project-page-title {
	font-family: 'Press Start 2P', cursive;
	font-weight: normal;
	font-size: 1.3em;
	color: #34b1f8;
	z-index: 1;
	transform: translateZ(
		0
	); // zabranuje aby text glitchoval kvoli hover animacii na inom elem.
}
.projects {
	position: relative;
	display: flex;
	height: 574px;
	width: 600px;
	overflow: hidden;
	transform: translateX(21px);
	align-items: center;
	padding-left: 0.5rem;

	.ProjectBox {
		margin-right: 90px;
	}

	#box-0,
	#box-1,
	#box-2 {
		opacity: 0;
		animation: boxIn 0.5s forwards ease;
		animation-delay: 1400ms;
	}
	#box-1 {
		animation-delay: 1200ms;
	}
	#box-2 {
		animation-delay: 1600ms;
	}

	@keyframes boxIn {
		from {
			transform: translateY(-600px);
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
}
.under-projects {
	position: relative;
}

.project-boxes {
	display: flex;
}
.arrows {
	.left-arrow,
	.right-arrow {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-80px, -50%);
		z-index: 11;
		cursor: pointer;

		svg {
			width: 37px;
		}
		path {
			fill: #df1041;
			stroke: #100317;
			stroke-width: 4px;
		}

		&:hover {
			path {
				stroke: #00f2fe;
			}
		}
	}
	.right-arrow {
		left: auto;
		right: 0;
		transform: translate(80px, -50%);
	}
}

.show-btn,
.close-btn {
	opacity: 0;
	top: 15px;
}
.showMeButton {
	opacity: 1;
	animation: fadeInUp;
	animation-duration: 1s;
}
.left-arrow svg,
.right-arrow svg {
	opacity: 0;
}
.showLeftArrow svg {
	opacity: 1;
	animation: fadeInLeft;
	animation-duration: 1s;
}
.showRightArrow svg {
	opacity: 1;
	animation: fadeInRight;
	animation-duration: 1s;
}

/* ////////////////////////////// SHOW CASE SEKCIA //////////////////////////// */
.hideBox {
	display: none;
}

.projectShowcase {
	.projects {
		overflow: visible;
		width: auto;
		transform: translateX(-90px);
		justify-content: flex-start;
		padding-left: 0;

		.project-boxes {
			transform: translateX(0) !important;
		}
		.ProjectBox {
			margin-right: 0;
		}
	}
}

@media (max-width: 930px) {
	.projects {
		width: 539px;
		transform: translateX(21px);

		.ProjectBox {
			margin-right: 60px;
		}
	}
	.arrows {
		.right-arrow {
			transform: translate(50px, -50%);
		}
		.left-arrow {
			transform: translate(-50px, -50%);
		}
	}
}
@media (max-width: 800px) {
	.projectShowcase {
	}
	.projects {
		height: 480px;
	}
	.project-page-title {
		font-size: 1em;
	}

	.show-btn {
		margin-bottom: 6rem;
	}

	.arrows {
		.right-arrow {
			transform: translate(-70px, 85%);
			bottom: 0;
			top: auto;
		}
		.left-arrow {
			transform: translate(70px, 85%);
			bottom: 0;
			top: auto;
		}
	}
}
@media (max-width: 620px) {
	.projectShowcase {
		justify-content: flex-start;
		height: calc(100vh + 200px);
		padding-top: 1.5rem;

		.projects {
			height: auto;
			padding-top: 1.5rem;
			padding-bottom: 17rem;
			transform: translateX(0px);
		}
	}
}

@media (max-width: 440px) {
	.arrows {
		.right-arrow {
			transform: translate(-125px, 85%);
		}
		.left-arrow {
			transform: translate(125px, 85%);
		}
	}
	.projects {
		.ProjectBox:not(.selected)::after {
			content: '';
			position: absolute;
			top: -10px;
			left: -10px;
			width: 150%;
			height: 106%;
			background: #100317cf;
			z-index: 10;
			pointer-events: none;
		}
	}
}
@media (max-height: 600px) {
	.projects {
		height: 350px;
	}
}
@media (max-height: 500px) {
	.projects {
		height: 200px;
	}
}
</style>
