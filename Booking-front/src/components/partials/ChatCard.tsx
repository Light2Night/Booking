import { getApiImageUrl } from "utils/apiImageAccessor.ts";
import { format } from "date-fns";
import IMessage from "interfaces/message/IMessage.ts";

const ChatCard = (props: {
    image: string;
    fullName: string;
    lastMassage?: IMessage;
    isOnline?: boolean;

    isSelected?: boolean;
    onClick?: () => void;
}) => {
    const { image, fullName, lastMassage, isSelected, onClick } = props;

    const time = lastMassage?.createdAtUtc !== undefined ? format(lastMassage.createdAtUtc, "HH:mm") : "";

    return <div className={`chat-container ${isSelected ? "chat-container-selected" : ""} pointer`}
                onClick={() => onClick?.()}>
        <img src={getApiImageUrl(image, 200)} alt="image" className="chat-user-image" />

        <div className="chat-info">
            <div className="chat-header">
                <p className="full-name">{fullName}</p>
                <p className="chat-time">{time}</p>
            </div>
            <div className="chat-body">
                <p className="last-message">{lastMassage?.text}</p>
                <div className={`online-status ${props.isOnline ? "online-status-online" : "online-status-offline"}`} />
            </div>
        </div>
    </div>;
};

export default ChatCard;