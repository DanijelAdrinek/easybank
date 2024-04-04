import React from 'react';
import styles from './button.module.css';
import { Public_Sans } from '@next/font/google'

const publicSans = Public_Sans({
    subsets: ['latin'],
    weight: ['300']
})


/**
 * @typedef {Object} ButtonProps
 * @property {Function} buttonFunction - The function to be executed on button click
 * @property {string | HTMLElement} [children='Request Invite'] - The text content
 * @property {'small' | 'medium' | 'big'} [size='medium'] - The size of the button
 * @property {string} [color='#FFF'] - The color of the text
 * @property {string} [btnColor] - The background color of the button
 * @property {Array.<string>} [additionalClasses] - Add's additional classes to the button
 */

/**
 * Button component
 * 
 * @param {ButtonProps} props - The properties of the button
 * @returns {JSX.Element} - The rendered button element
 */
function Button(props) {
    const { buttonFunction, children = 'Request Invite', size = 'medium', color = '#FFF', btnColor, additionalClasses } = props;

    // Converts the value user provided for a class from the module with its values
    const classToModuleConverter = {
        'small': styles.small,
        'medium': styles.medium,
        'big': styles.big
    }

    // Compute background color
    const bgColor = btnColor ? btnColor : 'linear-gradient(to right, #31D35C, #2BB7DB);';

    // Construct button classes and styles
    const buttonClasses = [styles.button, classToModuleConverter[size], ...additionalClasses, publicSans.className].join(' ');

    console.log(buttonClasses)

    const buttonStyles = { color, background: bgColor };

    return (
        <button className={buttonClasses} style={buttonStyles} onClick={buttonFunction}>
            {children}
        </button>
    );
}

export default Button;