module.exports = {
  params: {
    designator: 'SW',
    from: { type: 'net', value: 'GND' },
    to: { type: 'net', value: 'RAW' }
  },
  body: p => `
    (module switch_tht (layer F.Cu) (tedit 0)
      ${p.at}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
      (pad 1 thru_hole circle (at -2.5 0) (size 2.5 2.5) (drill 1.2) (layers *.Cu *.Mask) ${p.from.str})
      (pad 2 thru_hole circle (at 2.5 0) (size 2.5 2.5) (drill 1.2) (layers *.Cu *.Mask) ${p.to.str})
    )
  `
}