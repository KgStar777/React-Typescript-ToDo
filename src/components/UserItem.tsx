import React, {FC} from 'react';
import {IUser} from "../types/types";
import classes from "../styles.module.css";

interface UserItemProps {
    user: IUser,
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} className={classes.userCard}>
            {user.id} {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;