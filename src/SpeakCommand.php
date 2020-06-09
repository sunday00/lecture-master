<?php

namespace App;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use Symfony\Component\Console\Formatter\OutputFormatterStyle;


class SpeakCommand extends Command 
{
    protected function configure ()
    {
        $this->setName('speak')
            ->setDescription('speak a message')
            // ->addArgument("message", InputArgument::REQUIRED, "speak this message will be shown at console.");
            ->addArgument("message", InputArgument::OPTIONAL, "speak this message will be shown at console.", "stranger");
            // ->addOption();

    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        echo ("hello " . $input->getArgument('message'));
        // echo ("hello " . $input->getOption('message'));
        // exec("echo \n");
        echo "\n";
        echo "\n";

        $output->writeln("finished.");
        $output->writeln("<info> finished. </info>");
        $output->writeln("<comment> finished. </comment>");
        $output->writeln("<question> finished. </question>");
        $output->writeln("<error> finished. </error>");

        $outputStyle = new OutputFormatterStyle('red', 'yellow', ['bold', 'blink']);
        $output->getFormatter()->setStyle('fire', $outputStyle);
        $output->writeln('<fire>foo</>');

        // green text
        $output->writeln('<fg=green>foo</>');

// black text on a cyan background
        $output->writeln('<fg=black;bg=cyan>foo</>');

// bold text on a yellow background
        $output->writeln('<bg=yellow;options=bold>foo</>');

// bold text with underscore
        $output->writeln('<options=bold,underscore>foo</>');
        return 1;
    }
}