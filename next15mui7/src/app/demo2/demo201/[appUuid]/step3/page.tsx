import AppForm from "./AppForm";

export default async function Demo201Step3Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params
  await new Promise((resolve) => setTimeout(resolve, 800)) // 測試 loading 是否有效。正式版請移除。

  return (
    <AppForm appUuid={appUuid} />
  )
}
