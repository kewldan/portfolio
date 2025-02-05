import React from "react";
import {getTranslations} from "next-intl/server";
import CopyText from "@/components/copy-text";

type Wallet = {
    currency: string;
    address: string;
}

const wallets: Wallet[] = [
    {currency: 'TRON', address: 'TPvdY1z8k9pPeAprii7SUtQ2KUotUcUs7N'},
    {currency: 'ETH/BSC', address: '0xaE03357CB8a416c91b3Ddfa63cB44a8E00dd0596'},
    {currency: 'TON', address: 'UQA_747mRW3vNQlW8AQISOO3J5UJJXcASRoLpS0rK7UnOFfJ'},
    {currency: 'BTC', address: 'bc1qxeggd3wf75pklztkkued6rq972txdph76y3zkq'},
]

export default async function Donate() {
    const t = await getTranslations('Donate');

    return (
        <div className="px-4 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-2xl w-full space-y-4">
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                    {t('crypto')}
                </h1>
                <div className="mt-4">
                    {wallets.map(wallet => (
                        <div key={wallet.currency} className="space-x-2">
                            <span>{wallet.currency}</span>
                            <CopyText value={wallet.address}
                                      className="text-sm font-normal break-words">{wallet.address}</CopyText>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border p-4 rounded-2xl w-full space-y-4">
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                    {t('fiat')}
                </h1>
                <div>
                    <a href="https://pay.cloudtips.ru/p/34002994"
                       className="underline underline-offset-2 transition-colors hover:text-primary/80">
                        RUB CloudTips
                    </a>
                </div>
            </div>
        </div>
    )
}