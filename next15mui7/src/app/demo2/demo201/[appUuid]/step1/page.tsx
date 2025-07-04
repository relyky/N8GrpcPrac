import AppForm from "./AppForm";

export default async function Demo201Step1Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params;

  // 測試 loading 是否有效。正式版請移除。
  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <AppForm appUuid={appUuid} />
  );
}
