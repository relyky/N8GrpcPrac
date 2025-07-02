"use server"
import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'

/**
 * 生成申請案號
 */
export async function handleGoApply() {
  const appUuid = randomUUID()

  //...在資料庫註記此申請案號。只能使用一次。

  //return appUuid
  redirect(`/demo2/demo201/${appUuid}/step1`)
}

export async function handleCommitStep1(info: FormData) {
  const appUuid = info.get('appUuid')

  //...在資料庫完成步驟一相關工作。

  redirect(`/demo2/demo201/${appUuid}/step2`)
}

export async function handleCommitStep2(info: FormData) {
  const appUuid = info.get('appUuid')

  //...在資料庫完成步驟一相關工作。

  redirect(`/demo2/demo201/${appUuid}/step3`)
}

export async function handleCommitStep3(info: FormData) {
  const appUuid = info.get('appUuid')

  //...在資料庫完成步驟一相關工作。

  redirect(`/demo2/demo201/${appUuid}/step4`)
}


export async function handleCommitStep4(info: FormData) {
  const appUuid = info.get('appUuid')

  //...在資料庫完成步驟一相關工作。

  redirect(`/demo2/demo201/${appUuid}/success`)
}
