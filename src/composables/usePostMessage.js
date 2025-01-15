import { ref, watch } from "vue";

export function usePostMessage(
  { type, targetOrigin = "*" },
  onMessageCallback
) {
  const isActive = ref(false); // Controla si el listener está activo
  // Enviar un mensaje al window.parent
  const postMessage = (message) => {
    isActive.value = true;
    window.parent.postMessage(
      {
        type,
        data: { ...message }, // Permite agregar datos adicionales
      },
      targetOrigin
    );
    console.log({
      type,
      data: { ...message }, // Permite agregar datos adicionales
    });
  };

  // Registrar el listener para recibir mensajes
  const handleMessage = (event) => {
    if (typeof onMessageCallback === "function") {
      onMessageCallback(event);
      isActive.value = false;
    }
  };

  // Usar watcher para activar/desactivar dinámicamente
  watch(
    isActive,
    (newValue) => {
      if (newValue) {
        console.log("Activando listener de mensajes");
        window.addEventListener("message", handleMessage);
      } else {
        console.log("Desactivando listener de mensajes");
        window.removeEventListener("message", handleMessage);
      }
    },
    { immediate: true } // Ejecutar inmediatamente para configurar el estado inicial
  );

  return {
    postMessage,
  };
}
