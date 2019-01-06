% From Edward Lear's "Complete Nonsense".
% Transcription to Lilypond for Project Gutenberg and Distributed Proofreaders.
% No copyrights apply.


\version "2.2.5"

#(ly:set-point-and-click 'line-column)

\header {
	title = "The Yonghy Bonghy Bò."
}


verse= \lyrics {
	On the coast of Co -- ro -- man -- del,
	where the ear -- ly pump -- kins grow,
	In the midd -- le of the woods
	lived the Yon -- ghy Bon -- ghy Bò.
	Two old chairs and half a cand -- le,
	One old jug with -- out a hand -- le,
	These were all his world -- ly goods,
	In the midd -- le of the woods,
	These were all the world -- ly goods,
	of the Yon -- ghy Bon -- ghy Bò,
	of the Yon -- ghy Bon -- ghy Bò.
}
 

staffVoice = \new Staff \notes {
	\time 2/4
	\set Staff.instrument="Canto."
	\set Staff.midiInstrument="voice oohs"
	\key e \major
	\clef treble
	\relative c' {
		\context Voice = "melodyVoi" {
			\autoBeamOff
			\partial 16*2 		
			e16 fis 		gis8. fis16 gis8. a16 		gis8 fis r8 dis16. e32
			fis8. fis16 e8 fis	gis4 r8 gis 16 gis		ais8 ais gis ais
			b4 r8 b16. b32		cis8 gis ais fis		b4 r8 b16. b32 
			b8. ais16 b8. cis16	b8\( a\) r a16. a32		a8. gis16 a8. b16
			a8 gis r gis16. gis32	gis8 gis fis e			fis4 r8 cis'16. cis32
			cis8 cis cis cis	b4 b8. cis16			b8. a16 b8. a16 
			gis4 r8 e16. fis32	gis8. a16 fis8. gis16		e4 b8. e16
			gis8. e16 gis8. fis16	e4 r
		}

	\bar "|."
	}

}
staffPiano = \new PianoStaff {
	\set PianoStaff.midiInstrument = #"acoustic grand"
	\set PianoStaff.instrument = #"Piano  "
	<<
		\context Staff = RH {  % Right hand 
			\clef treble
			\notes {
				\key e \major
				\partial 16*2
				<< { \relative c' { \slurBoth
					e16 fis						gis8. fis16 gis8. a16
					gis8 fis  b8\rest dis,16. e32			fis8. fis16 e8 <dis fis>
					<e gis>4 b'8\rest fis16 gis			ais8 ais gis ais
					<dis, b'>4 b'8\rest b16. b32			<gis cis>4 <e fis ais>
					<dis fis b> b'8\rest b16. b32			<gis b>8. <fisis ais>16 <gis b>8. <ais cis>16
					<gis b>8( <fis a>) b8\rest a16. a32		<fis a>8. <eis gis!>16 <fis a>8. <gis b>16
					<fis a>8 <e gis> b'8\rest gis16. gis32		gis8( <b, e gis> <a b fis> <gis b e>
					<fis b dis fis>4) b'8\rest cis16. cis32		cis8 cis cis cis
					b4 b8. cis16					<gis b>8. <fis a>16 <gis b>8. <fis a>16
					<e gis>4 b'8\rest e,16. fis32			gis8. a16 fis8. gis16
					e4 b8. e16					gis8. e16 gis8. fis16
					e4 b'4\rest
				} } \\ { \relative c' {
					s8						e4 e
					e8 dis s4					dis4 b8 b
					b4 s4						r8 e4 e8
					s4. fis8					s2
					s2						s2
					s2						s2
					s2						s2
					s2						<e a>4 <e a>
					<e gis> s					dis dis
					s2						e4 dis
					cis s						s b(
					b) s
				} } >>					
			}
		}
		\context Staff = LH {  % Left hand 			
			\clef bass
			\notes {
				\key e \major
				\partial 16*2
				<< { \relative c' { \slurBoth
					gis16 a						b8. a16 b8. cis16
					<b, b'>8 <b a'> d\rest fis16. gis32		a8. a16 gis8 fis
					<e, b' e>4 d'\rest				r8 cis'[ b cis]
					b4 d,8\rest dis					e[ cis fis fis,]
					b[ fis b,] d'\rest				b'4 b,
					b'8[ b, b'] d,\rest				b'4 b,
					e8[ b e,] d'\rest				s2
					s4 d\rest					<a e' a> <a e' a>
					<e e'> d'\rest					<b b'> <b b'>
					<e b'> d8\rest gis16. a32			<b, b'>4 <b a'>
					<e gis> d\rest					b'8. gis16  b8. a16
					gis4 d\rest
				} } \\ { \relative c { \slurBoth
					s8						e4 e
					s2						b4 b8 b
					s2						fis'4. fis8
					b4 s						s2
					s						s
					s						s
					s						b,(
					<b, b'>4) s					s2
					s						s
					s						s
					s						b'4 b
					e s
				} } >>	
			}
		}
	>>
}



\score { \notes
	<<
		\staffVoice
		\context Lyrics = lmelodyVoi \lyricsto "melodyVoi" \verse		
		\staffPiano
	>>
	
	\midi {
		\tempo 4 = 75 
	}
		
	\paper {
		pagenumber = no
		\context {
			\RemoveEmptyStaffContext
		}
	}

}
