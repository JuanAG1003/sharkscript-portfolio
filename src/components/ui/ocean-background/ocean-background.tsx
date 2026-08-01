export default function OceanBackground () {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgb(47_217_244/0.1),transparent_42%),radial-gradient(ellipse_at_14%_32%,rgb(47_217_244/0.055),transparent_34%),radial-gradient(ellipse_at_86%_64%,rgb(34_211_238/0.045),transparent_32%)]' />

      <div className='absolute inset-x-[-18%] top-[-14%] h-96 rotate-[-5deg] opacity-[0.26] blur-sm animate-ocean-drift bg-[repeating-radial-gradient(ellipse_at_center,transparent_0_3.1rem,rgb(47_217_244/0.2)_3.18rem,rgb(47_217_244/0.2)_3.23rem,transparent_3.34rem_6.5rem)] sm:h-120' />

      <div className='absolute inset-x-[-16%] bottom-[-18%] h-110 rotate-[4deg] opacity-[0.19] blur-[1px] animate-ocean-drift-reverse bg-[repeating-radial-gradient(ellipse_at_center,transparent_0_4rem,rgb(47_217_244/0.18)_4.08rem,rgb(47_217_244/0.18)_4.13rem,transparent_4.24rem_8rem)]' />

      <div className='absolute left-[7%] top-[22%] size-1.5 rounded-full bg-primary/40 shadow-[4.2rem_9rem_0_-1px_rgb(47_217_244/0.18),8rem_24rem_0_-0.5px_rgb(47_217_244/0.12),12rem_1.5rem_0_-0.5px_rgb(47_217_244/0.14),18rem_18rem_0_-1px_rgb(47_217_244/0.16),25rem_11rem_0_0_rgb(47_217_244/0.1),33rem_7rem_0_-1px_rgb(47_217_244/0.19),41rem_29rem_0_-0.5px_rgb(47_217_244/0.11),48rem_21rem_0_-0.5px_rgb(47_217_244/0.13),58rem_15rem_0_-1px_rgb(47_217_244/0.14),65rem_4rem_0_-1px_rgb(47_217_244/0.17)] opacity-70 blur-[0.2px] animate-ocean-bubbles' />

      <div className='absolute right-[9%] top-[36%] size-1 rounded-full bg-primary/35 shadow-[-5rem_8rem_0_-0.5px_rgb(47_217_244/0.14),-10rem_26rem_0_-1px_rgb(47_217_244/0.12),-14rem_17rem_0_-1px_rgb(47_217_244/0.12),-22rem_31rem_0_-0.5px_rgb(47_217_244/0.1),-26rem_5rem_0_-0.5px_rgb(47_217_244/0.15),-35rem_13rem_0_-1px_rgb(47_217_244/0.13),-38rem_22rem_0_-1px_rgb(47_217_244/0.12),-47rem_3rem_0_-0.5px_rgb(47_217_244/0.11),-52rem_12rem_0_-0.5px_rgb(47_217_244/0.13),-62rem_28rem_0_-1px_rgb(47_217_244/0.1)] opacity-65 blur-[0.2px] animate-ocean-bubbles-delayed' />

      <div className='absolute left-[34%] bottom-[10%] size-1 rounded-full bg-primary/30 shadow-[-18rem_-8rem_0_-0.5px_rgb(47_217_244/0.12),-12rem_6rem_0_-1px_rgb(47_217_244/0.14),-4rem_-14rem_0_-0.5px_rgb(47_217_244/0.11),5rem_-5rem_0_-1px_rgb(47_217_244/0.16),11rem_9rem_0_-0.5px_rgb(47_217_244/0.13),19rem_-17rem_0_-1px_rgb(47_217_244/0.12),27rem_2rem_0_-0.5px_rgb(47_217_244/0.15),36rem_-10rem_0_-1px_rgb(47_217_244/0.11),44rem_8rem_0_-0.5px_rgb(47_217_244/0.13)] opacity-60 blur-[0.25px] animate-ocean-bubbles-rise' />

      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgb(9_15_17/0.12)_0%,transparent_30%,rgb(9_15_17/0.58)_100%)]' />
    </div>
  )
}
