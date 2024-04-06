import React from 'react';
import footer from "../styles/index.module.scss"

export default function Footer() {
    return (
        <div className={footer.container}>
            <div className={footer.rowFooter}>
                <div className={footer.box}>
                    <div className={footer.header}>Top Products</div>
                    <p>Managed Website</p>
                    <p>Manage Reputation</p>
                    <p>Power Tools</p>
                    <p>Marketing Service</p>
                </div>
                <div className={footer.box}>
                    <div className={footer.header}>Quick Links</div>
                    <p>Jobs</p>
                    <p>Brand Assets</p>
                    <p>Investor Relations</p>
                    <p>Terms of Service</p>
                </div>
                <div className={footer.box}>
                    <div className={footer.header}>Jobs</div>
                    <p>Brand Assets</p>
                    <p>Investor Relations</p>
                    <p>Investor Relations</p>
                    <p>Marketing Service</p>
                </div>
                <div className={footer.box}>
                    <div className={footer.header}>Resources</div>
                    <p>Guides</p>
                    <p>Research</p>
                    <p>Experts</p>
                    <p>Agencies</p>
                </div>
                <div className={footer.box}>
                    <div className={footer.header}>Newsletter</div>
                    <span>Heaven fruitful doesn't over lesser in days. Appear creeping</span>
                    <form action="">
                        <input type="text" placeholder="Enter Address" />
                        <input type="submit" value="Subscribe Now" />
                    </form>
                </div>
            </div>
        </div>
    )
}
