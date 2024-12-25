import React from "react";
import {getTranslations} from "next-intl/server";
import CopyText from "@/components/copy-text";

type Wallet = {
    currency: string;
    address: string;
}

const wallets: Wallet[] = [
    {currency: 'USDT TRC20', address: 'TEwsFUvUFZue46GX29ZveCnor432eaQR59'},
    {currency: 'USDT ERC20', address: '0xfbcbaa9e63e9e86d95d27462cbed8ce146e9e0b0'},
    {currency: 'USDT BEP20', address: '0xeb8d98d0cce077343cfb357486e558b1ac1b5060'},
    {currency: 'USDT TON', address: 'UQAfS4nVeyhY74XUhu_ZyJkPOqff_MIZ5VKJSPSEg5kGyd7G'},
    {currency: 'USDT SOL', address: '8N19xwjBYpzQ11gWXx9hYJUZxCyGXpW2VUKKX4Uwxgyq'},
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
                                      className="text-sm font-normal">{wallet.address}</CopyText>
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