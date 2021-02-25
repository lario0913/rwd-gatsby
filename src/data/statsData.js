import React from "react"
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive} from 'react-icons/md'
import {MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`} />),
        title: "Over 100 Destination",
        desc: "Travel to over 100 Unique places"
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`} />),
        title: "1 million trips made",
        desc: "Over 1 million trips completed in 2029"
    },
    {
        icon: (<MdTimer css={`color: #f34f2e`} />),
        title: "Fastest Support",
        desc: "Access our support team 24/7"
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576`} />),
        title: "Best Deals",
        desc: "We offer the best prices"
    }
]