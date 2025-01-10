import React from "react";

const NewClient = () => {
    return (
        <form>
             <div className='w-full'>
          <p className='mb-2'>Nom du Client *</p>
          <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Mickel' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Nom de l'entreprise *</p>
          <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='GSB' required/>

        </div>

        <div className='w-full'>

            <div>
              <p className='mb-2'>Numero du telephone *</p>
              <input  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='(+33) 06  12 34 56 78' required/>
            </div>

        </div>

        <div>
            <div>
                <p className='mb-2'>Adresse *</p>
                <input  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='40 rue Dunois ' required/>
            </div>
        </div>
        <div>
            <div>
                <p className='mb-2'>Email *</p>
                <input  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='GSB@gmail.com ' required></input>
            </div>
        </div>

        <div>
            <div>
                <p className='mb-2'>Mot de passe *</p>
                <input  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Huebh3@LOhe' required/>
            </div>
        </div>
        <div>
            <div>
                <p className='mb-2'>Ville *</p>
                <input  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Paris'required />
            </div>
        </div>


        <div>
            <div>
                <p className='mb-2'>Code Postal *</p>
                <input  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='75013'required />
            </div>
        </div>
        <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>Ajouter</button>

        </form>
    );
}
export default NewClient;