const f1 = () => {
    console.log('iniziating 1')
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('resolving 1')
            res(1)
        }, 3000);

    })
    console.log('returning promise 1')
    return p
}

const f2 = async () => {
    console.log('iniziating 2')
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('resolving 2')
            res(2)
        }, 2000);

    })
    console.log('returning promise 2')
    return p
}

const f3 = async () => {
    console.log('iniziating 3')
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('resolving 3')
            res(3)
        }, 7000);
    })
    console.log('returning promise 3')
    return p
}


const solve = async () => {
    // const n1 = f1()
    // const n2 = f2()
    // const r1 = await n1
    // const r2 = await n2
    // const [r1, r2] = await Promise.all([n1,n2])
    const [r1, r2] = await Promise.all([f1(),f2()])

    return r1 + r2
}

const solve2 = async () => {
    const [r1, r2, r3] = await Promise.all([f1(), f2(), f3()])
    console.log(r1 + r2 + r3)
}

const sequence = async () => {
    const n1 = await f3()
    const n2 = await f2()

    console.log(n1 + n2)
}

// solve2()

const runOnlyOnce = (callback) => {
    const cache = {}
    return (n) => {
        if(cache[n]){
            return cache[n]
        } else {
            const result = callback(n)
            cache[n] = result
            return result 
        }
    }
        // return callback
}

const cachedFn = runOnlyOnce((n) => {
    console.log(`this should be printed only once for ${n}!`)
    return n*n
})

const cachedFn2 = runOnlyOnce((n) => {
    console.log(`this should be printed only once for ${n}!`)
    return n+2
})

console.log(cachedFn(1))
console.log(cachedFn(2))
console.log(cachedFn(2))
console.log(cachedFn(1))
console.log(cachedFn(3))
console.log(cachedFn(4))

console.log(cachedFn2(2))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))
console.log(cachedFn2(10))



const runOnlyOnce2 = (callback) => {
    let called = false
    return (n) => {
        if(!called){
            called = true
            return callback()
        }
    }
}

const cachedFn3 = runOnlyOnce2(() => {
    console.log(`this should be printed only once!`)
    return 10
})

console.log(cachedFn3())
console.log(cachedFn3())
console.log(cachedFn3())
console.log(cachedFn3())
console.log(cachedFn3())
console.log(cachedFn3())

// void: especificar cuando una funcion no devuelve nada, nadie deberia utilizar lo que esto devuelve
// any: cualquier cosa const a: any a.d a.x 
// unknown: similar a any pero quiero que typescript no me deje trabajar con el const a:unknown  a.x a.y
// typescript no me deja trabjar con a. 
// never: no se deberia usar, incogruencia.


//async filesystem no dejo el hilo esperando, callbacks y promesas, comunicarse pro la red, esperar o 
//reaccinoar eventos, emiters recivers, timeouts
// sincrono todo lo otro, no se suelta el hilo hasta que se termine


// un bucket de s3: Subir los archivos estaticos a s3, s3 publico mala practica, colocar un cloudfront
// que publique los archivos del bucket de s3 para que sea privado. s3 es privado cloudfront no es privado

// Dominio: el me da un dominio amazon, tengo que crear un hosted zone en Route 53, y apuntar la raiz / 
// a cloudfront http://mycompany.com 

// Back: Labmda con apigateway o crear un cluster de ECS necesito un ECR para subir la imagen de docker
// y un loadbalancer para que hable con ECS o cloudmap aws se encarga de la resolucion de los servicios
// o EC2 configurar la maquina distribuir el codigo a esa maquina para que corra puede ser con docker 
// pero no necesariamente, se puede hacer instalar como servicio en la maquina.

// Dominio de backend: Route 53 voy a apuntar a api.mycompany.com a APIGateway o loadbalancer o EC2

// Base de datos: No tengo que gestionar nada DynamoDB para guardar la informacion de los usuarios
// o una base de datos en RDS puede ser con postgres o Mysql y el backend se tiene que conectar con esto
// para comunicarme con sdk de aws o el driver de la base de datos que se haya elegido en RDS para acceder
// a la base de datos, sockers de red driver 

// Domain registration es cuando compro el dominio http://mycompany.com para poderlo utilizar se puede hacer
// Godaddy o route53
// Hosting es donde vive el sitio web Godaddy o S3 (mas flexible) puedo tenerlo en un linux en s3 lanzar
// assets en EC2

