import React from "react";
import {FaGithub} from "react-icons/fa6";
import {TbBrandPython} from "react-icons/tb";
import InstallationCode from "@/app/projects/aaio/InstallationCode";
import Code from "./Code";

export default function Projects() {
    return (
        <main className="flex flex-col items-center pb-4 w-full p-4">
            <div className='w-full max-w-4xl flex flex-col items-center gap-y-4'>
                <h1 className='text-4xl font-semibold flex flex-row items-center gap-x-2'><TbBrandPython size={34}/>AAIO
                </h1>
                <div className='flex flex-row w-full gap-2 items-center justify-center mt-2'>
                    <img src='https://img.shields.io/static/v1?label=kewldan&message=AAIO&color=blue&logo=github'
                         alt='Badge'/>
                    <img
                        src='https://img.shields.io/github/release/kewldan/AAIO?include_prereleases=&sort=semver&color=blue'
                        alt='Badge'/>
                    <img src='https://img.shields.io/badge/License-MIT-blue' alt='Badge'/>
                    <img src='https://github.com/kewldan/AAIO/actions/workflows/python-publish.yml/badge.svg'
                         alt='Badge'/>
                    <img src='https://img.shields.io/github/issues/kewldan/AAIO' alt='Badge'/>
                </div>

                <h3 className='text-2xl font-semibold mt-6'>Установка</h3>
                <div className='flex flex-row items-center w-full gap-x-4 justify-center'>
                    <div className='flex flex-col items-center w-full p-2 gap-y-2'>
                        <h3 className='text-xl font-semibold'>PyPi</h3>
                        <InstallationCode/>
                    </div>
                    <div className='divider divider-horizontal'>
                        ИЛИ
                    </div>
                    <div className='flex flex-col items-center w-full p-2 gap-y-2'>
                        <h3 className='text-xl font-semibold'>Из исходного кода</h3>
                        <button className='btn btn-primary w-full'>
                            <FaGithub size={26}/>
                            Github
                        </button>
                    </div>
                </div>
                <span className='mt-4'>
                    В библиотеки реализованы все методы, представленные на сайте AAIO на момент выкладывания версии библиотеки.
                    Все методы, выполняющие HTTP запросы являются асинхронными, а также возвращают модели, а не словари, для валидации данных.
                    После каждого HTTP запроса, библиотека проверяет его <code>type</code>, если он не <code>success</code>, выбрасывается исключение <code>AAIOBadRequest</code> с
                    полями <code>code</code> и <code>message</code>, которые выводятся в консоль. Стоит отметить, что в документации работы с API AAIO, что в библиотеке могут
                    быть ошибки, поэтому прошу сразу докладывать о проблемах с библиотекой (или не актуальности)
                    в <a href='https://github.com/kewldan/AAIO/issues' className='link'>issues</a> на Github или в <a
                    href='/telegram' className='link'>телеграм</a>. Вся
                    библиотека описана docstrings, поэтому в IDE работает подсветка синтаксиса
                </span>
                <div className='rounded-xl p-2 bg-[#2b2b2b]'>
                <span className='flex flex-col items-center text-gray-400'>
                    Базовая структура кода с библиотекой
                </span>
                    <Code>
                        {`import asyncio

from aaio import AAIO


async def main():
    client = AAIO('MERCHANT ID', 'SECRET KEY', 'API KEY')  # Создание клиента работы с библиотекой
    balances = await client.get_balances()  # Получение балансов
    print(balances)  # Модель type='success' balance=625.85 referral=172.96 hold=0.0
    print(balances.balance)  # Текущий баланс - 625.85


asyncio.run(main())`}
                    </Code>
                </div>
                <h3 className='text-xl font-semibold mt-6'>Создание счета и проверка его оплаты</h3>
                <div className='rounded-xl p-2 bg-[#2b2b2b]'>
                    <Code>
                        {`import asyncio

from aaio import AAIO


async def main():
    client = AAIO('MERCHANT ID', 'SECRET KEY', 'API KEY')  # Создание клиента работы с библиотекой
    payment_url = client.create_payment(249, 'some-order-id')  # Создание ссылки на оплату 249 рублей
    while True:
        payment_info = await client.get_payment_info('some-order-id')
        if payment_info.is_success():
            print('Счёт оплачен')
            break


asyncio.run(main())`}
                    </Code>
                </div>
                <span className='text-lg w-full text-center bg-[#1b1b1b] rounded-xl p-2'>
                    Очень важно генерировать уникальные <code>order-id</code>, например хорошей практикой будет использовать <code>uuid-v1</code>
                </span>
            </div>
        </main>
    )
}