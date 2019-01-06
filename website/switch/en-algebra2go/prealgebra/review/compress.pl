#/usr/bin/perl
use strict;
use warnings;

foreach my $infile (`find ./ -name '*.wmv'`) {
    chomp $infile;
    my $outfile = $infile;
    $outfile =~ s/wmv$/mp4/;

    print "/usr/bin/HandBrakeCLI --encoder x264 --quality 28.0 --audio 1 --aencoder faac --ab 48 --mixdown mono --arate auto --drc 0.0 --audio-copy-mask aac,ac3,dtshd,dts,mp3 --audio-fallback ffac3 --format mp4 --loose-anamorphic --modulus 2 --markers --x264-preset medium --h264-profile baseline --h264-level 3.0 --x264-tune fastdecode --optimize --maxWidth 700 --maxHeight 392 --crop 0:0:0:0 --ipod-atom --input '$infile' --output './$outfile'\n";

    print `/usr/bin/HandBrakeCLI --encoder x264 --quality 28.0 --audio 1 --aencoder faac --ab 48 --mixdown mono --arate auto --drc 0.0 --audio-copy-mask aac,ac3,dtshd,dts,mp3 --audio-fallback ffac3 --format mp4 --loose-anamorphic --modulus 2 --markers --x264-preset medium --h264-profile baseline --h264-level 3.0 --x264-tune fastdecode --optimize --maxWidth 700 --maxHeight 392 --crop 0:0:0:0 --ipod-atom --input '$infile' --output './$outfile'`;

}
