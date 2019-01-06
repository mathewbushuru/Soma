%[**This page is marked up in lilypond notation.**]
%#(set-global-staff-size 10)
\paper  {
  papersize = "letter"
}
\version "2.2.0"
\header {
%  dedication = "dedication"
  title = "The Pelicans"
%  subtitle = "subtitle"
%  subsubtitle = "Subsubtitle"
%  composer = "Composer (xxxx-yyyy)"
%  opus = "Opus 0"
%  piece = "Piece I"
%  instrument = "Instrument"
%  arranger = "Arranger"
%  poet = "Poet"
%  texttranslator = "Translator"
%  copyright = "public domain"
%  source =  "urtext "
  enteredby = "Stan Goodman"
%  maintainerEmail = "your email here"
%  texidoc = "The standard header that ought to be above a file."
}

melody = \notes { \relative c'' {
  \dynamicUp
  \time 6/8
  \key e \major
  b4\< gis8\! e'8.\> dis16 cis8\! | b4 b8 gis4 r8 | b4\< b8 b4 b8\! | b4\> b8 b4\!
  r8
  | \break
  b4\< gis8\! e'8.\> dis16 cis8\! | b4 b8 gis4 r8 | \grace { gis4 } b4
  fis8
  fis b cis | dis4 cis8 b4 r8 \bar"||" \break
  b,4^\markup \italic "Coro--piu sostenuto." gis'8 gis fis gis | b, e fis gis4 b,8 | e4 gis8 gis4 b8 | b8
  a8
  gis8 fis4 r8 | \break
  b,4 dis8 fis eis fis | b, fis' gis a4 gis8 | cis4 b8 a8 gis fis
  |
  gis4 fis8 e4 r8 \bar "||"
} }

text = \lyrics {
King and Queen of the Peli -- cans we, No other birds so grand we
see!
None but we have _ feet like fins with love -- ly lea -- the -- ry
throats and chins,
Ploff -- skin, Pluff _ -- skin, Pe -- li -- can Jee! we think no
birds
so hap -- py as we!
Plump -- skin, Ploff _ -- skin, Pe -- li -- can Jill! We think to
then, and we thought so still!
}

upper = \notes { \relative c'' {
  \time 6/8
  \key e \major
   << { b4 gis8 e'8. dis16 cis8 } \\ { e,4. e4. } >> | << { b'4 b8
   gis4 r8 | b4 b8 b4 b8 | b4 b8 b4 r8 } \\ { e,4. ~ e4 s8 | <b
   fis'>4. <fis' a> | <e gis> <dis fis>4 s8 } >> |
  << { b'4 gis8 e'8. dis16 cis8 | b4 b8 gis4 r8 | b4 fis8 fis b
  cis | dis4 cis8 b4 r8 } \\ { e,4. e | e e4 s8 | dis4 dis8 dis4 e8 | <<
  {
  fis4. ~ fis4 } \\ { fis4 e8 dis4 s8 } >> } >>  \bar"||"
  s4 gis8 gis fis gis | b, e fis gis4 << { s8 e4 fis8 } \\ { b,8 ~
  b4.} >> << { gis'4 b8 } \\ { e,4. } >> | <gis b>8 <fis a> <e
  gis>
  <dis fis>4 r8 | \break
  b4 dis8 fis eis fis | b, fis' gis a4 gis8 | << { cis4 b8 a8 gis
  fis
  } \\ { e2. } >> | << { <e gis>4 <dis fis>8 e4 r8 } \\ { b4. b4
  s8 }
  >> \bar "||"
} }

lower = \notes { \relative c {
  \time 6/8
  \key e \major
  << { gis'4 e8 cis'8. b16 a8 | gis4. b4 } \\ { e,4. ~ e4. | e4. ~
  e4
  } >> r8 | <b b'>4 b'8 b4 b8 | b4 b8 b4 r8 |
  << { gis4 e8 cis'8. b16 a8 | gis4. b4 } \\ { e,4. ~ e4. | e4. ~
  e4 }
  >> r8 | << { b'4 fis8 fis4. ~ | fis4 ais8 b4 } \\ { <b, fis'>
  fis8
  fis4. | fis'4. <b, fis'>4 } >> r8 \bar "||"
  << { b'4 s4 s4 } \\ <e,, b' e>2. \\ <gis' b>2. >> | << <gis b>2.
  \\
  <e, b' e>2. >> | << { gis'4. b4. | b4. ~ b4 } \\ { e,4. e4. |
  b4. ~
  b4 } >> r8 |
  << { b'2. | b4. ~ b4 } \\ { <b, dis a'>2. | <b dis a'>4. ~ <b
  dis
  a'>4 } >> e8 | a4 gis8 cis b a | << { b,4 a'8 gis4 } \\ { b, s8
  e4 }
  >> r8 \bar "||"
} }

\score {
  <<
    \addlyrics
      \context Staff = mel {
        \set Staff.autoBeaming = ##f
	\set Staff.instrument = "Canto.  "
         \unset Staff.melismaBusyProperties 
        \melody
      }
      \context Lyrics \text

    \context PianoStaff
    \set Staff.instrument = "Piano.  "
    <<
      \context Staff = upper \upper
      \context Staff = lower <<
	\clef bass
	\lower
      >>
    >>
  >>
  \paper {
	  pagenumber=no
    \context { \RemoveEmptyStaffContext }
  }
  \midi { \tempo 4=120 }
}
