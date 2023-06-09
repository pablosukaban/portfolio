import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
    icon: React.ReactElement;
    color: string;
    directionLeft?: boolean;
};

const SingleSkill = ({ icon, color, directionLeft }: Props) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div
                initial={{ opacity: 0, x: directionLeft ? -100 : 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`fill-current  ${hovered ? color : 'text-gray-500'}`}
            >
                {React.cloneElement(icon)}
            </motion.div>
        </div>
    );
};

export default SingleSkill;
