import React from 'react';
import { plansData } from '../components/PlansData';

import './Subscription.css';
const Plans = () => {
    return React.createElement(
        'div',
        { className: 'plans-container' },
        React.createElement(
            'div',
            { className: 'programs-header', style: { gap: '3rem' } },
            React.createElement(
                'span',
                { className: 'stroke-text', style: { justify: "center" } },
              
                
            )
        ),
        React.createElement(
            'div',
            { className: 'plans' },
            plansData.map((plan, i) => React.createElement(
                'div',
                { className: 'plan' },
                plan.icon,
                React.createElement(
                    'span',
                    null,
                    plan.name
                ),
                React.createElement(
                    'span',
                    null,
                    '\u20B9',
                    plan.price
                ),
                React.createElement(
                    'div',
                    { className: 'features' },
                    plan.features.map((feature, i) => React.createElement(
                        'div',
                        { className: 'feature' },
                      
                        React.createElement(
                            'span',
                            { key: i },
                            feature
                        )
                    ))
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'span',
                        null,
                        'See More benefits ->'
                    )
                ),
                React.createElement(
                    'button',
                    { className: 'btn' },
                    'Join Now '
                )
            ))
        )
    );
};

export default Plans;