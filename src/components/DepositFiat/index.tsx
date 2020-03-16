import * as React from 'react';
import { FormattedMessage } from 'react-intl';


export interface DepositFiatProps {
    /**
     * Sets helper description
     */
    description: string;
    /**
     * Sets title describing the data displayed in children
     */
    title: string;
    uid: string;
}


const bankData = uid => [
    {
        key: <FormattedMessage id="page.body.wallets.tabs.deposit.fiat.bankName" />,
        value: 'FIRST IVESTMENT BANK',
    },
    {
        key: <FormattedMessage id="page.body.wallets.tabs.deposit.fiat.accountNumber" />,
        value: 'IBAN:BG14FINV91501017382046 | BIC/SWIFT:FINVBGSF | EU Bank SEPA',
    },
    {
        key: <FormattedMessage id="page.body.wallets.tabs.deposit.fiat.accountName" />,
        value: 'MD LEADER',
    },
    {
        key: <FormattedMessage id="page.body.wallets.tabs.deposit.fiat.phoneNumber" />,
        value: '+359 0700 12 777',
    },
    {
        key: <FormattedMessage id="page.body.wallets.tabs.deposit.fiat.referenceCode" />,
        value: uid,
    },
];

/**
 * Component to display bank account details which can be used for a
 * deposit
 */
const DepositFiat: React.FunctionComponent<DepositFiatProps> = (props: DepositFiatProps) => {
    const {
        description,
        title,
        uid,
    } = props;

    const renderDetails = (detail, index: number) => {
        return (
            <div className="cr-deposit-fiat-detail" key={index}>
                <p className="cr-deposit-fiat-detail__label">{detail.key}:</p>
                <p className="cr-deposit-fiat-detail__value">{detail.value}</p>
            </div>
        );
    };

    return (
        <div className="cr-deposit-fiat">
            <p className="cr-deposit-fiat__title">{title}</p>
            <p className="cr-deposit-fiat__description">{description}</p>
            <div className="cr-deposit-fiat-credentials">{bankData(uid).map(renderDetails)}</div>
        </div>
    );
};

export {
    DepositFiat,
};
