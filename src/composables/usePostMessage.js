import { onMounted, onUnmounted, reactive } from "vue";

export function usePostMessage(
  { type, targetOrigin = "*" },
  onMessageCallback
) {
  const eventData = reactive();
  // Enviar un mensaje al window.parent
  const postMessage = (message) => {
    window.parent.postMessage(
      {
        type,
        ...message, // Permite agregar datos adicionales
      },
      targetOrigin
    );
  };

  // Registrar el listener para recibir mensajes
  const handleMessage = (event) => {
    if (typeof onMessageCallback === "function") {
      onMessageCallback(event);
    }
  };

  onMounted(() => {
    console.log("Componente montado, escuchando mensajes");
    window.addEventListener("message", handleMessage);
  });

  onUnmounted(() => {
    console.log("Componente desmontado, limpiando listener");
    window.removeEventListener("message", handleMessage);
  });

  return {
    postMessage
  };
}
