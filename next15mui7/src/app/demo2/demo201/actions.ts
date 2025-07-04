"use server"
import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'
import { z } from 'zod';

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
 * 用 zod 檢驗 schema。
 */
const demo201ValuesSchema = z.object({
  appUuid: z.string().uuid('申請編號 格式錯誤'),
  idNumber: z.string().min(10, '身份證字號 長度不足10碼'),
  name: z.string().min(2, '姓名 至少2個字以上'),
  phoneNumber: z.string().regex(/^09\d{8}$/, '手機號碼 格式錯誤！'),
  emailAddress: z.string().email('電子信箱 格式錯誤！'),
});

/**
 * 需滿足 useActionState 的規格。 
 */
export async function handleCommitStep1(prevState: IFormState<Demo201Values>, form: FormData): Promise<IFormState<Demo201Values>> {
  const raw = Object.fromEntries(form.entries())
  const parsed = demo201ValuesSchema.safeParse(raw)

  //const appUuid = form.get('appUuid')

  if (!parsed.success) {
    return <IFormState<Demo201Values>>{
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      values: raw as unknown as Demo201Values
    }
  }

  // 模擬更多商業邏輯檢查
  const { emailAddress } = parsed.data
  if (emailAddress === 'fail@example.com') {
    return <IFormState<Demo201Values>>{
      success: false,
      errors: { emailAddress: ['此 Email 已被註冊'] },
      values: parsed.data
    }
  }

  //...在資料庫完成步驟一相關工作。

  // SUCCESS 回傳新 FormState
  return <IFormState<Demo201Values>>{
    success: true,
    errors: {},
    values: parsed.data
  }

  // SUCESSS 直接轉頁
  //const { appUuid } = parsed.data
  //redirect(`/demo2/demo201/${appUuid}/step2`)
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
