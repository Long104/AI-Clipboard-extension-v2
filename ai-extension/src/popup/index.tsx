import { Main } from "~components/main"

import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core"

function IndexPopup() {
  return (
    <MantineProvider>
      <Main />
    </MantineProvider>
  )
}

export default IndexPopup
