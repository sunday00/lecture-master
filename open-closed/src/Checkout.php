<?php

namespace App;

interface PaymentMethodInterface
{
    public function acceptPayment($receipt);
}

class CashPaymentMethod implements PaymentMethodInterface
{
    public function acceptPayment($receipt)
    {
        var_dump("accept cash");
    }
}

class Checkout {
    // public function begin(Receipt $receipt)
    // {
    //     $this->acceptCash($receipt);
    // }

    // public function acceptCash ()
    // {
    //     var_dump("accept cash");
    // }

    public function begin (Receipt $receipt, PaymentMethodInterface $payment)
    {
        $payment->acceptPayment($receipt);
    }
}