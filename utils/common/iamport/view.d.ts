export interface GetRequestPaymentHTMLProps {
    title?: string;
    pg?: string;
    merchant_id: string;
    pay_method: string;
    merchant_uid: string;
    imp_uid: string;
    name: string;
    amount: number;
    buyer_email?: string;
    buyer_name?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    buttonText?: string;
    buttonWrapperStyle?: object | string;
    buttonStyle?: object | string;
    callback_url: string;
    done_redirect_uri: string;
    fail_redirect_uri: string;
}
export interface GetRequestCertificationHTML {
    title?: string;
    imp_uid: string;
    merchant_uid?: string;
    popup?: boolean;
    m_redirect_url?: string;
}
export declare const getRequestPaymentHTML: ({ title, imp_uid, buttonText, buttonWrapperStyle, buttonStyle, ...props }: GetRequestPaymentHTMLProps) => string;
export declare const getCertificationHTML: ({ title, imp_uid, ...props }: GetRequestCertificationHTML) => string;
