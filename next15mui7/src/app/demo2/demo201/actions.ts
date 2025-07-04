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

/**
 * 需滿足 useActionState 的規格。
 * @param form 
 */
export async function handleCommitStep1(prevState: IDemo201Step1_FomrStae, form: FormData): Promise<IDemo201Step1_FomrStae> {
  const appUuid = form.get('appUuid') as string
  const idNumber = form.get('idNumber') as string
  const name = form.get('name') as string
  const phoneNumber = form.get('phoneNumber') as string
  const emailAddress = form.get('emailAddress') as string

  const info = { idNumber, name, phoneNumber, emailAddress }
  console.log('ON:handleCommitStep2', info)

  // 模擬失敗
  if (name === 'test fail') {
    const respState: IDemo201Step1_FomrStae = {
      success: false,
      errors: { name: ['模擬失敗訊息！'] },
      appUuid: appUuid,
      idNumber: idNumber,
      name: name,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    }

    return respState;
  }

  //...在資料庫完成步驟一相關工作。

  // // SUCCESS 回傳新 FormState
  // return <IDemo201Step1_FomrStae{
  //   success: true,
  //   errors: {},
  //   appUuid: appUuid,
  //   idNumber: idNumber,
  //   name: name,
  //   phoneNumber: phoneNumber,
  //   emailAddress: emailAddress,
  // }

  // SUCESSS 直接轉頁
  redirect(`/demo2/demo201/${appUuid}/step2`)
}

/*
export async function handleCommitStep1(form: FormData) {
  const appUuid = form.get('appUuid')
  const idNumber = form.get('idNumber')
  const name = form.get('name')
  const phoneNumber = form.get('phoneNumber')
  const emailAddress = form.get('emailAddress')

  const info = { idNumber, name, phoneNumber, emailAddress }
  console.log('ON:handleCommitStep2', info)

  //...在資料庫完成步驟一相關工作。

  redirect(`/demo2/demo201/${appUuid}/step2`)
}*/

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
