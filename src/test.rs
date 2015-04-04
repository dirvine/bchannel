use super::{Sender, Receiver, channel};

#[test]
fn basic() {
    let (sx, mut rx): (Sender<usize, ()>, Receiver<usize, ()>) = channel();

    sx.send(5usize).unwrap();
    sx.send(6usize).unwrap();
    sx.close();

    assert!(rx.recv() == Some(5usize));
    assert!(rx.recv() == Some(6usize));
    assert!(rx.recv() == None);
    assert!(rx.is_closed());
}

#[test]
fn error() {
    let (sx, mut rx)  = channel();

    sx.send(5usize).unwrap();
    sx.error("hi".to_string()).unwrap();

    assert!(rx.recv() == Some(5usize));
    assert!(rx.recv() == None);
    assert!(rx.is_closed());
    assert!(rx.has_error());
    assert!(rx.take_error() == Some("hi".to_string()))
}

#[test]
fn into_iter() {
    let (sx, rx): (Sender<usize, ()>, Receiver<usize, ()>) = channel();

    sx.send(5usize).unwrap();
    sx.send(7).unwrap();
    sx.send(9).unwrap();

    let mut rx = rx.into_iter();

    let xs: Vec<usize> = rx.by_ref().collect();
    assert!(xs == vec![5,7,9]);

    sx.send(1).unwrap();
    sx.send(2).unwrap();
    sx.send(3).unwrap();

    let ys: Vec<usize> = rx.collect();
    assert!(ys == vec![1,2,3]);
}

