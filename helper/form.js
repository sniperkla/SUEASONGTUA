export const formLogin = (attemp) => {
  const formvalid = (
    <p
      style={{
        fontSize: '15px'
        // textShadow: 'white 1px 1px 2px',
      }}
       className="text-red-500"
    >
      กรุณากรอกข้อมูลให้ครบถ้วน
    </p>
  )
  const formvalid2 = (
    <p
      style={{
        fontSize: '15px'
        // textShadow: 'white 1px 1px 2px',
      }}
       className="text-red-500"
    >
      ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ({attemp})
    </p>
  )
  return { formvalid, formvalid2 }
}
