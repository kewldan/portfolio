'use client';

import React, {useState} from "react";

export default function InstallationCode() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <code className='bg-[#15191e] p-3 rounded-xl tooltip w-full'
              data-tip={open ? `Скопировано!` : `Нажмите, чтобы скопировать`}
              onClick={() => {
                  navigator.clipboard.writeText('pip install aaio').then(() => {
                      setOpen(true);
                      setTimeout(() => {
                          setOpen(false)
                      }, 1500);
                  });
              }}>pip install aaio</code>
    )
}