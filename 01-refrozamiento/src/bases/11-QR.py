import os
import pandas as pd
import qrcode
from openpyxl import load_workbook

# ==============================
# 1. Pedir al usuario los datos
# ==============================
excel_file = input("Ingrese el nombre del archivo Excel (ejemplo: listado.xlsx): ").strip()
columna = input("Ingrese el nombre de la columna que contiene los datos: ").strip()

# ==============================
# 2. Leer el archivo Excel
# ==============================
try:
    df = pd.read_excel(excel_file)
except FileNotFoundError:
    print(f"❌ Error: El archivo '{excel_file}' no existe en la carpeta actual.")
    exit()

if columna not in df.columns:
    print(f"❌ Error: La columna '{columna}' no existe en el archivo Excel.")
    print(f"Columnas disponibles: {list(df.columns)}")
    exit()

# ==============================
# 3. Crear carpeta de salida
# ==============================
output_folder = "QR_Generados"
os.makedirs(output_folder, exist_ok=True)

# ==============================
# 4. Generar QR para cada valor
# ==============================
rutas_qr = []  # Para guardar las rutas y luego agregarlas al Excel
valores_unicos = set()

for idx, valor in enumerate(df[columna]):
    if pd.isna(valor):  # Si la celda está vacía
        print(f"⚠️ Aviso: Fila {idx+2} ignorada (valor vacío).")
        rutas_qr.append(None)
        continue

    if valor in valores_unicos:  # Evitar duplicados
        print(f"⚠️ Aviso: Valor duplicado en fila {idx+2} -> '{valor}'. Ignorado.")
        rutas_qr.append(None)
        continue

    valores_unicos.add(valor)

    # Intentar usar el valor como nombre de archivo
    try:
        file_name = f"{str(valor)}.png"
        # Eliminar caracteres no válidos para nombres de archivo
        file_name = "".join(c for c in file_name if c.isalnum() or c in (' ', '_', '-')).rstrip()
        if not file_name:
            file_name = f"QR_{idx+1}.png"
    except:
        file_name = f"QR_{idx+1}.png"

    file_path = os.path.join(output_folder, file_name)

    # Crear el código QR
    qr = qrcode.QRCode(
        version=1,  # Controla el tamaño (1=21x21, hasta 40=177x177)
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,  # Tamaño de cada caja
        border=4,     # Borde blanco alrededor
    )
    qr.add_data(str(valor))
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(file_path)

    print(f"✅ QR generado para fila {idx+2}: {file_path}")
    rutas_qr.append(file_path)

# ==============================
# 5. Guardar Excel con rutas QR
# ==============================
df["Ruta_QR"] = rutas_qr
nuevo_archivo = excel_file.replace(".xlsx", "_con_QR.xlsx")
df.to_excel(nuevo_archivo, index=False)

print("\n🎉 Proceso completado.")
print(f"Los QR fueron guardados en la carpeta '{output_folder}'.")
print(f"Se generó también un nuevo archivo con las rutas: {nuevo_archivo}")