module.exports = {
  params: {
    designator: 'STAB',
    size: '2u'
  },
  body: p => {
    const wire_offset = p.size === '3u' ? 19.05 : 11.938
    return `
      (module stab_pcb_screw (layer F.Cu) (tedit 0)
        ${p.at}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* Wire holes */}
        (pad 1 np_thru_hole circle (at ${-wire_offset} 0) (size 1.7 1.7) (drill 1.7) (layers *.Cu *.Mask))
        (pad 2 np_thru_hole circle (at ${wire_offset} 0) (size 1.7 1.7) (drill 1.7) (layers *.Cu *.Mask))

        ${'' /* Housing hole */}
        (pad 3 np_thru_hole circle (at 0 0) (size 3.8 3.8) (drill 3.8) (layers *.Cu *.Mask))

        ${'' /* Screw hole */}
        (pad 4 np_thru_hole circle (at 0 6.985) (size 3.0 3.0) (drill 3.0) (layers *.Cu *.Mask))
      )
    `
  }
}