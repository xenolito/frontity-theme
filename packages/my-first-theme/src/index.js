import Root from "./components"
import link from "@frontity/html2react/processors/link"

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
      autoPrefetch: "in-view",
      infiniteScrollPagesLimit: 0,
      infiniteScrollPostsLimit: 10,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link],
    },
  },
}

export default myFirstTheme
