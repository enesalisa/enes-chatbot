import SSRIcon from "@ingka/ssr-icon";
import speechBubble from "@ingka/ssr-icon/paths/speech-bubble";

function InitChatbot({
  onClick,
}: {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <button
        className="button-open-chatbot"
        onClick={() => {
          onClick(true);
        }}
      >
        <SSRIcon paths={speechBubble} />
      </button>
    </>
  );
}

export default InitChatbot;
