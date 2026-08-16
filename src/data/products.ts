export const products = [
  {
    slug: 'ujer',
    name: 'Ujer',
    mark: 'U',
    iconSrc: '/icons/ujer-waveform-mic.png',
    kind: 'macOS app',
    tagline: 'Speak once. Keep moving.',
    description:
      'A small, native dictation tool for macOS. Turn your voice into text without leaving the flow of work.',
    features: [
      { icon: 'spark', title: 'Native macOS', description: 'Feels at home on your Mac.' },
      { icon: 'keyboard', title: 'One shortcut', description: 'Start dictating without breaking flow.' },
      { icon: 'wave', title: 'Voice to text', description: 'Turn spoken thoughts into usable text.' },
    ],
    appHref: 'https://ujer.alat.cc/',
    downloadHref: '/downloads/Ujer-0.0.1-arm64.dmg',
    downloadLabel: 'Download for Apple silicon',
  },
  {
    slug: 'x-shot',
    name: 'X-Shot',
    mark: 'X',
    iconSrc: '/icons/x-shot-viewfinder.png',
    kind: 'macOS app',
    tagline: 'Capture. Mark up. Move on.',
    description:
      'A focused screenshot tool for macOS. Capture what matters, add a quick note, and get back to work.',
    features: [
      { icon: 'capture', title: 'Fast capture', description: 'Grab exactly what is on your screen.' },
      { icon: 'pen', title: 'Mark it up', description: 'Add the context your screenshot needs.' },
      { icon: 'bolt', title: 'Stay focused', description: 'A small tool that gets out of the way.' },
    ],
    appHref: '/x-shot/',
    downloadHref: '/downloads/X-Shot-0.0.1-arm64.dmg',
    downloadLabel: 'Download for Apple silicon',
  },
]
