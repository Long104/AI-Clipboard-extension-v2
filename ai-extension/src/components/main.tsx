import { useState } from "react"
import { Switch, Title, Text, Flex } from '@mantine/core'

export function Main({ name = "Extension" }) {
  const [data, setData] = useState("")

  return (
<Flex bg={"dark"} direction="column" align="center" justify="center" w={300} h={200}>
      <Title c="white" order={3}>
        CLIPBOARD-HELPER
      </Title>
      <Switch
      defaultChecked
      size="lg"
    />
      <Text size="md" color="white" style={{margin: "10px"}}>🙍‍♂️ HUMAN / 🐒 MONKEY</Text>
      </Flex>
  )
}
