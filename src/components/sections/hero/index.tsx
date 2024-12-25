import React from 'react';
import PhotoGallery from "./photoGallery";
import {getTranslations} from "next-intl/server";

const birthDate = new Date('2008-01-09');

function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export default async function Hero() {
    const t = await getTranslations('Hero');

    const age = calculateAge(birthDate);

    return (
        <main className='flex flex-col items-center justify-center gap-y-3 p-8 w-full relative screen-slide px-6'>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <PhotoGallery photos={[
                    '/photos/1.jpg',
                    '/photos/2.jpg',
                    '/photos/3.jpg',
                    '/photos/4.jpg',
                    '/photos/5.jpg',
                ]}/>

                <div className="flex flex-col items-center shrink-0">
                    <h1 className="text-3xl md:text-5xl font-medium">👋{t('hello')}</h1>
                    <span className="mt-10 text-md md:text-xl max-w-lg text-center lg:text-start">
                        {t('about', {age})}
                    </span>
                </div>
            </div>
        </main>
    )
}